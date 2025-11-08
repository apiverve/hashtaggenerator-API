declare module '@apiverve/hashtaggenerator' {
  export interface hashtaggeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface hashtaggeneratorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class hashtaggeneratorWrapper {
    constructor(options: hashtaggeneratorOptions);

    execute(callback: (error: any, data: hashtaggeneratorResponse | null) => void): Promise<hashtaggeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: hashtaggeneratorResponse | null) => void): Promise<hashtaggeneratorResponse>;
    execute(query?: Record<string, any>): Promise<hashtaggeneratorResponse>;
  }
}
