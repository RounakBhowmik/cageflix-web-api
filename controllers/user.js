exports.get_user_profile = async(req,res,next) => {
    try {
     return res.status(200).json({
        message: "User Profile fetched sucessfuly",
        data: {
            first_name:req.user.first_name,
            last_name: req.user.last_name,
            email: req.user.email
        },
        status: 1
     });
    } catch(err) {
        next(err);
    }
}