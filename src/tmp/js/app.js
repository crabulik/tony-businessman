new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        fileInput: null
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.fileInput = files[0];
        },
        generateScript: function () {
            console.log(this.fileInput);
            let X = XLSX;
            let readedFile = FileReader.readAsBinaryString(this.fileInput);

            let wb = X.read(readedFile, { type: 'binary' });
        }
    }
})