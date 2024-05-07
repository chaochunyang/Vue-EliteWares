declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      dbUser: string;
      pwd: string;
      host: string;
      PORT: string;
      // add more environment variables and their types here
    }
  }
}

export {};
