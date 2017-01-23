import { connect } from 'react-redux';
import SyncCounter from '../../components/Counter';
import { increment, decrement } from '../../redux/modules/counter';

function mapStateToProps(state) {
  return { value: state.counter.value };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SyncCounter);
