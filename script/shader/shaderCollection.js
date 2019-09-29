define([
    './defaultVertex',
    './defaultFragment',
    ], function(
        defaultVertex,
        defaultFragment
        ) {
    
    var collection = [];

    collection['defaultVertex'] = defaultVertex;
    collection['defaultFragment'] = defaultFragment;

    return collection;
});