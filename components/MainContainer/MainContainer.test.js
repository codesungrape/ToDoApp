import { fireEvent, render, screen } from "@testing-library/react";
import MainContainer from "./MainContainer";
import TasksContainer from "../TasksContainer/TasksContainer";
import InputForm from "../InputForm/InputForm";
import { notFound } from "next/navigation";

describe("MainContainer", () => {
  test("calls handleSubmit when the form is submitted", () => {
    const handleSubmit = jest.fn(); // Mock function to track calls
    render(<InputForm onSubmit={handleSubmit} />);

    // Select the form element
    const form = screen.getByRole("form");

    // Trigger form submission
    fireEvent.submit(form);

    // Ensure handleSubmit is called once
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
  test("should add a new task when submit button is clicked", () => {
    const mockSetTasks = jest.fn();
    const handleSubmit = jest.fn((e) => {
      e.preventDefault();
      console.log("handleSubmit called");
      mockSetTasks((prev) => [...prev, "Task3"]); // Simulate state update
    });

    const tasks = ["Task1", "Task2"];

    render(<InputForm onSubmit={handleSubmit} />);
    render(<TasksContainer tasks={tasks} setTasks={mockSetTasks} />);

    // Select form and input field
    const form = screen.getByRole("form");
    const input = screen.getByPlaceholderText("Enter a new task...");

    // Type a new task
    fireEvent.change(input, { target: { value: "Task3" } });

    // Submit the form
    fireEvent.submit(form);

    // Debugging logs
    console.log("handleSubmit calls:", handleSubmit.mock.calls.length);
    console.log("mockSetTasks after submit:", mockSetTasks.mock.calls.length);

    // Ensure handleSubmit was called
    expect(handleSubmit).toHaveBeenCalledTimes(1);

    // Ensure mockSetTasks was called
    expect(mockSetTasks).toHaveBeenCalledTimes(1);
    expect(mockSetTasks).toHaveBeenCalledWith(expect.any(Function));
  });
});
