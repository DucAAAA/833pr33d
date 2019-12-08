#Naming


#Codeing convertions

- Component Name: Pascal case. Eg: SomeComponent
- Folder: Kebab Case. Eg: file-manager
- Variable, Function: Camel Case. Eg: someVariable
- Constant: Upper Case Snake Case. Eg: THIS_IS_CONSTANT
- File name:
  - Component file:  Kebab Case. Eg: some-component.js
  - Saga-Action-Reducer-Selector-Test-Storybook-Spec:  [Kebab Case].[saga|action|reducer|selector|test|stories|spec].js

Lý do:
 - Pascal case: Convention React.
 - Kebab Case: khi double click dễ chọn từng phần, dễ chỉnh sửa hơn các kiểu khác.
 - Camel Case: Theo convetion thông dụng của Javascript.
 - Upper Case Snake Case: Theo convetion thông dụng của Javascript.

## Destructure props

Bad
```js
class Dog extends Component {
  render () {
    return <div className={this.props.breed}>My {this.props.color} dog is {this.props.isGoodBoy ? "good" : "bad"}</div>;
  }
}

or

const Dog = props => <div className={props.breed}>My {props.color} dog is {props.isGoodBoy ? "good" : "bad"}</div>;
```

Good
```js
class Dog extends Component {
  render () {
    const { breed, color, isGoodBoy } = this.props;
    return <div className={breed}>My {color} dog is {isGoodBoy ? "good" : "bad"}</div>;
  }
}

or

const Dog = props => {
  const { breed, color, isGoodBoy } = props;
  return <div className={breed}>My {color} dog is {isGoodBoy ? "good" : "bad"}</div>;
}
```
