document.getElementById('popper').style.display = "none";
document.getElementById('flag').style.display = "none";
document.getElementById('display').innerText = "10";
setTimeout(function() {
    document.getElementById('display').innerText = "9";
    setTimeout(function() {
        document.getElementById('display').innerText = "8";
        setTimeout(function() {
            document.getElementById('display').innerText = "7";
            setTimeout(function() {
                document.getElementById('display').innerText = "6";
                setTimeout(function() {
                    document.getElementById('display').innerText = "5";
                    setTimeout(function() {
                        document.getElementById('display').innerText = "4";
                        setTimeout(function() {
                            document.getElementById('display').innerText = "3";
                            setTimeout(function() {
                                document.getElementById('display').innerText = "2";
                                setTimeout(function() {
                                    document.getElementById('display').innerText = "1";
                                    setTimeout(function() {
                                        document.getElementById('display').innerText = "Happy Independence Day!";
                                        document.getElementById('display').classList.add('text-success');
                                        document.getElementById('popper').style.display = "block";
                                        document.getElementById('flag').style.display = "block";
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