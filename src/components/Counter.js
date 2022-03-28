
import {useSelector, useDispatch} from 'react-redux'
import {counterActions} from '../store/index'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(state => state.counter.value)
  const show = useSelector(state => state.counter.toggleCounter)

  // useSelector(state => console.log(state))


  const incrementHandler = () => {
    dispatch(counterActions.increase(5))
  }
  // const incrementHandler = () => {
  //   dispatch(counterActions.increment())
  // }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    // alert(this)
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterValue}</div>}
     
      
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler} disabled={counterValue <= 1}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Class based component

// class Counter extends Component {
//   constructor(props) {
//     super(props)

//     this.incrementHandler = this.incrementHandler.bind(this)
//     this.decrementHandler = this.decrementHandler.bind(this)
//   }
//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   render() {
//     const {counter} = this.props
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{counter}</div>
//         <div>
//           <button onClick={this.incrementHandler}>+</button>
//           <button onClick={this.decrementHandler}>-</button>
//         </div>
//         <button >Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'INCREMENT'}),
//     decrement: () => dispatch({type: 'DECREMENT'})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
