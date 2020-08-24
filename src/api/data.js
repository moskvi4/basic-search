const loadDataset = () =>
    fetch('https://raw.githubusercontent.com/moskvi4/basic-search/master/data/dataset.json?callback=?')
        .then(response => response.json());

export {loadDataset};
