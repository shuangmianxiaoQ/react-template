import { message } from 'antd';
import { Response } from '@/types/common';

const formatResult = (res: Response) => {
  if (res.type === 'SUCCESS') {
    if (res.status === 0) {
      return res.data;
    } else {
      message.error(res.text);
    }
  } else {
    message.error(res.text);
  }
};

export { formatResult };
