import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ImageDemo = () => {

return(
  <Space direction="vertical" style={{ width: '100%' }} size="large">
    <Upload
    //   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
    </Upload>
  </Space>
)
  }
  export default ImageDemo ; 