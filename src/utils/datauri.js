import DatauriParser from 'datauri/parser';

const parser = new DatauriParser();

// Data uri helper function
const dataUri = (file, type = 'webp') => parser.format(type, file.buffer);

export default dataUri;
