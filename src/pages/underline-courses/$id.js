import React, { PureComponent } from 'react';
import { Dialog } from 'element-react';
import styles from './index.less';

class UnderlineCoursesModal extends PureComponent {
  render() {
    const { id } = this.props;
    return (
      <Dialog visible={true}>
        <Dialog.Body>
          hhhh
        </Dialog.Body>
      </Dialog>
    )
  }
}

export default UnderlineCoursesModal;