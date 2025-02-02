import { render, screen } from "@testing-library/react";
import TasksContainer from "./TasksContainer";
import userEvent from "@testing-library/user-event";

describe("TasksContainer", () => {
  test("removes a task when delete button is clicked", () => {
    const mockSetTasks = jest.fn(); // Mock function for setTasks
    const tasks = ["Task 1", "Task 2", "Task 3"];

    render(<TasksContainer tasks={tasks} setTasks={mockSetTasks} />);

    // Click the delete button of the first task
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    userEvent.click(deleteButtons[0]);

    // Log to check if mockSetTasks was called
    console.log(mockSetTasks.mock.calls);

    // Expect setTasks to have been called with a filtered array
    expect(mockSetTasks).toHaveBeenCalledWith(["Task 2", "Task 3"]);
  });
});
