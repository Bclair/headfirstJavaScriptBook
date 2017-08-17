function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Invalid Password!!! No secret for you!!";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

var superSecretFile = {
    level: 'classified',
    opened: 0,
    password: 2,
    contents: "Dr. Evol's next meeting is in Hartford."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evol's next meting is in Sarasota.");
secret = getSecret(superSecretFile, 2);
console.log(secret);
