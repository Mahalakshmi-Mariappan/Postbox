import { useEffect } from 'react';

function usePrompt(message, when) {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (when) {
        event.preventDefault();
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [when, message]);
}

export default usePrompt;
