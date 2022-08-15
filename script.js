//call back hell
setTimeout(() => {
    document.getElementById('counter').innerHTML = 10;
    setTimeout(() => {
        document.getElementById('counter').innerHTML = 9;
        setTimeout(() => {
            document.getElementById('counter').innerHTML = 8;
            setTimeout(() => {
                document.getElementById('counter').innerHTML = 7;
                setTimeout(() => {
                    document.getElementById('counter').innerHTML = 6;
                    setTimeout(() => {
                        document.getElementById('counter').innerHTML = 5;
                        setTimeout(() => {
                            document.getElementById('counter').innerHTML = 4;
                            setTimeout(() => {
                                document.getElementById('counter').innerHTML = 3;
                                setTimeout(() => {
                                    document.getElementById('counter').innerHTML = 2;
                                    setTimeout(() => {
                                        document.getElementById('counter').innerHTML = 1;
                                        setTimeout(() => {
                                            document.getElementById('counter').innerHTML =
                                                'Happy Independence Day';
                                            document.getElementById('flagImage').style.display = 'block';
                                            document.getElementById('sec').style.display =
                                                'none';
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);