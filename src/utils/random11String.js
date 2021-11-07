/*
 * @Author: liulizhi
 * @Date: 2021-11-07 20:40:25
 * @LastEditTime: 2021-11-07 21:47:56
 * @Description: 生成11位随机字符串
 */
export default function random11String() {
  return Math.random().toString(36).split(".").slice(1).toString();
}