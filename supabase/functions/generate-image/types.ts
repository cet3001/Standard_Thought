
export interface ImageGenerationRequest {
  prompt: string;
  size?: string;
  quality?: string;
  style?: string;
}

export interface ImageGenerationResponse {
  imageUrl: string;
  revisedPrompt?: string;
  model: string;
}

export interface ErrorResponse {
  error: string;
  fallback?: boolean;
  imageUrl?: string;
  message?: string;
  details?: any;
}

export interface ModelConfig {
  model: string;
  prompt: string;
  size: string;
  quality: string;
  style?: string;
}
