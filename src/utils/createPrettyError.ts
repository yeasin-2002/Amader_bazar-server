class HttpError extends Error {
    statusCode: number;
    name: string;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.name = `HttpError`;
    }
}

export const createPrettyError = (
    statusCode: number = 500,
    message: string
): never => {
    throw new HttpError(statusCode, message);
};


