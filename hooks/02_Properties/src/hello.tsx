import * as React from "react";
import { func, string } from "prop-types";

// typescript的核心原则之一是类型检查关注值所具有的形状
interface Props {
  userName: string;
}

interface LabeledValue {
  label: string;
}

function printLabel(labelObj: LabeledValue) {
  console.log(labelObj.label)
}
let myObj = { size: 10, label: 'Size 10 Object' } 
printLabel(myObj);

interface SquareConfig {
  color?: string,
  width?: number,
}

// 可选的属性
function createSquare(config: SquareConfig) {
  let newSquare = { color: 'white', area: 100 };
  // confg.colo -> 报错
  // 可选属性的好处是你可以描述这些可能用上的属性，同时还可以防止使用不属于该接口的属性
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area  = config.width * config.width
  }

  return newSquare;
}
let mySquare = createSquare({ color: 'black' })

// 某些属性只能在首次创建对象时进行修改。你可以通过将readonly放在属性之前来指定
interface Point {
  readonly x: number,
  readonly y: number,
}
// 定义一个只读的对象
let p1: Point = { x: 10, y: 20 };
// p1.x = 5 -> 报错 

export const HelloComponent = (props: Props) => (
    <h2>Hello user: {props.userName} !</h2>
);