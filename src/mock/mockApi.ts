interface MockApiResponse<T> {
  message: string;
  timestamp: string;
  data: T;
}

export function mockApi<T>(response: T): Promise<MockApiResponse<T>> {
  return new Promise<MockApiResponse<T>>((resolve) => {
    setTimeout(() => {
      const data: MockApiResponse<T> = {
        message: "Mock API response",
        timestamp: new Date().toISOString(),
        data: response,
      };

      resolve(data);
    }, 3000);
  });
}
