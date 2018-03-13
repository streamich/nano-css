import {createElement as h} from 'react';
import {render} from 'react-dom';
import {Renderer} from '../src/lite';

const renderer = new Renderer;
const {rule} = renderer;

const className = rule({
    border: '1px solid red'
});

const el = document.createElement('div');
document.body.appendChild(el);

render(<div className={className}>
    Hello world!
</div>, el);
