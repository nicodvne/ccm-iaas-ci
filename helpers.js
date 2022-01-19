export const catchErrors = fn => (req, res, next) => {
    //High order fonction, permet de traiter automatiquement le catch sur une méthode
    return fn(req, res, next).catch(next);
}