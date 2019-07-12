import noticficationDom from './noticficationDom';

let noticfication;
function notice(type,content,duration,onClose){
  if (!noticfication) {
    noticfication = noticficationDom;
  } return noticfication.addNotice({
    type,content,duration,onClose
  })
}
export default {
  info (content,duration,onClose) {
    return notice ('info',content,duration,onClose)
  },
  success (content,duration,onClose) {
    return notice ('success',content,duration,onClose)
  },
  warning (content,duration,onClose) {
    return notice ('warning',content,duration,onClose)
  },
  loading (content,duration,onClose) {
    return notice ('loading',content,duration,onClose)
  },
  error (content,duration,onClose) {
    return notice ('error',content,duration,onClose)
  }
}