declare module 'replicate' {
  export interface ReplicateOptions {
    auth: string;
  }

  export interface RunOptions {
    input: Record<string, any>;
  }

  export default class Replicate {
    constructor(options: ReplicateOptions);
    run(model: string, options: RunOptions): Promise<string[]>;
  }
} 