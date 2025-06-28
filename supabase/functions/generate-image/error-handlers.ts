
import { CORS_HEADERS, FALLBACK_IMAGE_URL } from './constants.ts';
import { ErrorResponse } from './types.ts';

export function createBillingLimitResponse(): Response {
  console.error("💸 OpenAI billing limit reached - returning fallback strategy");
  return new Response(JSON.stringify({ 
    error: 'billing_limit_reached',
    message: 'OpenAI billing limit reached. Using fallback texture strategy.',
    fallback: true,
    imageUrl: FALLBACK_IMAGE_URL
  }), {
    status: 202,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

export function createAllModelsFailedResponse(errors: any): Response {
  console.error("❌ All models failed:", errors);
  return new Response(JSON.stringify({ 
    error: 'all_models_failed',
    fallback: true,
    imageUrl: FALLBACK_IMAGE_URL,
    details: {
      ...errors,
      message: 'All AI models failed. Check your OpenAI account billing and try again.'
    }
  }), {
    status: 202,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

export function createApiErrorResponse(error: any, status: number): Response {
  const errorMessage = error.error?.message || `OpenAI API returned status ${status}`;
  const errorType = error.error?.type || 'unknown';
  const errorCode = error.error?.code || 'unknown';
  
  return new Response(JSON.stringify({ 
    error: `OpenAI API Error: ${errorMessage}`,
    fallback: true,
    imageUrl: FALLBACK_IMAGE_URL,
    details: {
      status: status,
      type: errorType,
      code: errorCode,
      raw_error: error
    }
  }), {
    status: 202,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

export function createUnexpectedErrorResponse(error: any): Response {
  console.error('❌ Unexpected error in generate-image function:', error);
  return new Response(JSON.stringify({ 
    error: 'unexpected_server_error',
    fallback: true,
    imageUrl: FALLBACK_IMAGE_URL,
    details: error.message,
    stack: error.stack
  }), {
    status: 202,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
