import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        return (
            <div>

                <br/>
                {this.props.counters.map(counter =>
                    <Counter key={counter.id}
                             onDelete={this.props.onDelete}
                             onIncrement = {this.props.onIncrement}
                             value={counter.value}
                             counter={counter}>
                    </Counter>
                )}
            </div>
        );
    }
}
export default Counters;