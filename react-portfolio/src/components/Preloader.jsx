import { useEffect, useState } from 'react';

const Preloader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div id="preloader" className={hide ? 'hide' : ''}>
      <div className="loader-logo">ST</div>
      <div className="loader-bar"><span></span></div>
    </div>
  );
};

export default Preloader;
