import {useEffect, useState} from 'react';

function Message({ size, featherCount }) {

  const [sizeClass, setSizeClass] = useState('');
  const [msg, setMsg] = useState('')

  useEffect(() => {
    console.log('Message', size);
    //calculating image size
    let cname = '';
    switch(size) {
      case 'm':
        cname = 'medium';
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    // console.log(cname);
    setSizeClass(cname);
  }, [size])

  useEffect(() => {
    if (featherCount <= 0)
    setMsg('Oh my! Your bird is naked!');
  else if (featherCount >= 10) {
    setMsg('Full turkey!');
  } else {
    setMsg('Coming along...');
  }
}, [featherCount])

  return (
    <div className={`message ${sizeClass}`}>
      {msg}
    </div>
  );
};

export default Message;
