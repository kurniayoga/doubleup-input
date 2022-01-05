import { render, fireEvent } from "@testing-library/react"
import App from "./App"

test ('Double up input array from Array Input and Show it in Result', () => {
    const renderApp = render(
        <App />
    );

    const setupInput = () => {
        const input = renderApp.getByLabelText('array-input') as HTMLInputElement;

        return {
          input,
          ...renderApp
        }
    }

    const setupOutput = () => {
      const output = renderApp.getByLabelText('result-input') as HTMLInputElement;

      return {
        output,
        ...renderApp
      }
  }

    const { input } = setupInput();
    const { output } = setupOutput();

    fireEvent.change(input, {target: {value: '3,4,5,6'}});

    expect(output.value).toBe('6,8,10,12');
})