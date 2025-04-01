import { useState } from 'react';

interface GenerationState {
  loading: boolean;
  error: string | null;
  output: string[] | null;
}

export function useGeneration(endpoint: string) {
  const [state, setState] = useState<GenerationState>({
    loading: false,
    error: null,
    output: null,
  });

  const generate = async (data: any) => {
    try {
      setState({ loading: true, error: null, output: null });
      
      const response = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Generation failed');
      }

      setState({
        loading: false,
        error: null,
        output: result.output,
      });

      return result.output;
    } catch (error) {
      setState({
        loading: false,
        error: error instanceof Error ? error.message : 'Generation failed',
        output: null,
      });
      return null;
    }
  };

  return {
    generate,
    loading: state.loading,
    error: state.error,
    output: state.output,
  };
} 