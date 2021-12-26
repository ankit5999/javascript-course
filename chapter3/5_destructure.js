// objact destructuring

const band = {
    bandName:"led zepplin",
    famousSong:"strirway to heaven",
    year:1968,
    anotherSong:"nevay"
};

// const bandname = band.bandName;
// console.log(bandname);

// destructuring ===>>

// const {bandName, famousSong} = band;
// const {bandName : var1, famousSong : var2} = band;

// console.log(band);
// console.log(bandName, famousSong);
// console.log(var1, var2);

const {bandName, famousSong, ...restProps} = band;
console.log(restProps); // year: 1968, anotherSong: 'nevay'

