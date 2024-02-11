import { FallbackProps } from 'react-error-boundary';

export default function ApiErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  let message = '서버에서 오류가 발생했습니다.';

  if (error.response && error.response.status === 404) {
    message = '요청한 데이터를 찾을 수 없습니다.';
  } else if (error.response && error.response.status === 500) {
    message = '서버에서 내부 오류가 발생했습니다.';
  }

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </div>
  );
}
