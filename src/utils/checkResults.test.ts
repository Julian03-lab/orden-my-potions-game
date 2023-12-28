import { describe, it, expect } from "vitest";
import { checkResults } from "./checkResults";
import { Board } from "../logic";

describe("checkResults", () => {
  it("should return correct results for a win", () => {
    const lastBoard: Board = [
      { color: "red", status: "empty" },
      { color: "blue", status: "empty" },
      { color: "green", status: "empty" },
      { color: "yellow", status: "empty" },
      { color: "purple", status: "empty" },
    ];
    const result = ["red", "blue", "green", "yellow", "purple"];

    const { board, matchStatus } = checkResults(lastBoard, result);

    expect(board).toEqual([
      { status: "correct", color: "red" },
      { status: "correct", color: "blue" },
      { status: "correct", color: "green" },
      { status: "correct", color: "yellow" },
      { status: "correct", color: "purple" },
    ]);
    expect(matchStatus).toBe("win");
  });

  it("should return correct results for a waiting status", () => {
    const lastBoard: Board = [
      { color: "red", status: "empty" },
      { color: "blue", status: "empty" },
      { color: "green", status: "empty" },
      { color: "yellow", status: "empty" },
      { color: "purple", status: "empty" },
    ];
    const result = ["red", "blue", "green", "orange", "purple"];

    const { board, matchStatus } = checkResults(lastBoard, result);

    expect(board).toEqual([
      { status: "correct", color: "red" },
      { status: "correct", color: "blue" },
      { status: "correct", color: "green" },
      { status: "wrong", color: "yellow" },
      { status: "correct", color: "purple" },
    ]);
    expect(matchStatus).toBe("waiting");
  });

  it("should return correct results for a waiting status with a colour repeated", () => {
    const lastBoard: Board = [
      { color: "red", status: "empty" },
      { color: "blue", status: "empty" },
      { color: "orange", status: "empty" },
      { color: "purple", status: "empty" },
      { color: "red", status: "empty" },
    ];
    const result = ["red", "blue", "green", "yellow", "orange"];

    const { board, matchStatus } = checkResults(lastBoard, result);

    expect(board).toEqual([
      { status: "correct", color: "red" },
      { status: "correct", color: "blue" },
      { status: "parcial", color: "orange" },
      { status: "wrong", color: "purple" },
      { status: "wrong", color: "red" },
    ]);
    expect(matchStatus).toBe("waiting");
  });

  it("should return correct results for a waiting status with multiples colour repeated", () => {
    const lastBoard: Board = [
      { color: "blue", status: "empty" },
      { color: "blue", status: "empty" },
      { color: "red", status: "empty" },
      { color: "purple", status: "empty" },
      { color: "red", status: "empty" },
    ];
    const result = ["yellow", "blue", "red", "yellow", "orange"];

    const { board, matchStatus } = checkResults(lastBoard, result);

    expect(board).toEqual([
      { status: "wrong", color: "blue" },
      { status: "correct", color: "blue" },
      { status: "correct", color: "red" },
      { status: "wrong", color: "purple" },
      { status: "wrong", color: "red" },
    ]);
    expect(matchStatus).toBe("waiting");
  });
});
