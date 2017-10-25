//fonction vérifiant les collision entres éléments
function isCollide(a, b) {
    if (
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    ) {
        return false;
    }
    else {
        return true;
    }
}