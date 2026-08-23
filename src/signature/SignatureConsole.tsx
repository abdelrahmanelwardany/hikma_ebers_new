import { useEffect } from 'react';

// Feature 4: a styled console message — a branded ASCII-style mark for the
// technically curious. Runs once per session.

export default function SignatureConsole() {
  useEffect(() => {
    if (sessionStorage.getItem('ebers-console')) return;
    sessionStorage.setItem('ebers-console', '1');

    const mark = `
   ███████ 
   ██     
   █████   
   ██     
   ███████   `;

    const styleMark = 'color:#FF5C57;font-weight:700;font-size:13px;line-height:1.4';
    const styleSub = 'color:#8f8680;font-size:11px;font-style:italic';
    const styleReset = 'color:inherit;font-size:11px';

    // eslint-disable-next-line no-console
    console.log(
      `%c${mark}\n%cEbers — ideas → experiences\n%cA digital innovation proposal crafted with intent.`,
      styleMark,
      styleSub,
      styleReset,
    );
  }, []);

  return null;
}
