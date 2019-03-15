import { split } from 'ramda';

const SYMBOLS = new RegExp(/[/\-_ ]/gi);

const words = split(SYMBOLS);

export default words;
