const router=require('express').Router();
const restaurants=require('../model/restaurant');


router.route('/restaurants').get((req,res) =>{
    restaurants.find()
    .then(restaurants=>res.json(restaurants))
    .catch(err=>res.status(400).json('Error: '+err));

});

router.route('/restaurants/:id').get((req,res) =>{
    restaurants.findById(req.params.id)
    .then(restaurants=>res.json(restaurants))
    .catch(err=>res.status(400).json('Error: '+err));

});

router.route('/NewRestaurant').post((req,res) =>{
        

        const name=req.body.name;
        const cuisine=req.body.cuisine;
     
        const NewRestaurant=new restaurants({
                name,cuisine
        });
        

        NewRestaurant.save()
        .then(() =>res.json('Restaurant Updated!'))
        .catch(err => res.status(400).json('Error:'+err));

        console.log(NewRestaurant);
});

router.route('/restaurants/reviews/:id').post((req,res) =>{
  restaurants.findById(req.params.id)
    .then(restaurants=>{
      restaurants.reviews.push(req.body.review);
      restaurants.save().then(() => res.json('Review updated!')).catch(err => res.status(400).json('Error: ' + err))
    })
  
});


router.route('/delete/:id').delete((req,res) =>{
  restaurants.findByIdAndDelete(req.params.id)
    .then(() => res.json('restaurant deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
  
});


module.exports=router;

