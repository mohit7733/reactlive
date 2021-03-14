import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link as NavLink } from 'react-router-dom';

export default function Header(){
    return(
        <>
        <header id="header-area" class="">

<div id="header-top" class=" d-xl-block">
<div class="container">
<div class="row">

<div class="col-lg-12 col-md-12 col-sm-12">
<div class="header-language-icons">
<div class="language">
  <img src="image/eng.png" />
<select id="select" class="lang-select">
     <option id="english" value="english">English</option>
    <option id="spanish" value="spanish">Spanish</option>
    <option id="portuguese" value="portuguese">Portuguese</option>
</select>
<select id="select" class="lang-select">
     <option id="english" value="english">GBP</option>
    <option id="spanish" value="spanish">GBP 1</option>
    <option id="portuguese" value="portuguese">GBP 2</option>
</select>
</div>
</div>
</div>
</div>
</div>
</div>

<div id="header-middle">
<div class="container">
<div class="row">
<div class="col-lg-3 col-md-12">
<NavLink href="index.php" class="logo" title="Pesabee">
<img src="image/header-logo.png" />
</NavLink>
</div>
<div class="col-lg-7 d-xl-block">
    <div class="row searchFiltercategory" >
   
      <div class="group-search" >
       <input id="table_filter" type="text" class="form-control" placeholder="Search here..." />
       <div class="group-category" >
        <button type="button" class="btn dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><span class="label-icon" >All Categories</span><i class="fa fa-caret-down" aria-hidden="true"></i></button>
        <div class="dropdown-menu" >
           <ul class="category_filters" >
            <li >
             <input class="cat_type category-input" data-label="All" id="all" value="" name="radios" type="radio" /><label for="all" >All</label>
            </li>
            
           </ul>
        </div>
       
       </div>
     </div>
     <div class="header-search">
     <button>Search</button>    
      </div>
  </div>



</div>
<div class="col-lg-2 col-md-12 ">
  <div class="fafonts-display">
<i class="fa fa-user-o"></i>
<span class="fa fa-heart-o position-relative"> </span>
<i class="fa fa-balance-scale" aria-hidden="true"></i>
</div>
</div>
</div>
</div>
</div>
<div id="header-bottom">
<div class="container">
<div class="row">

    <div class="col-sm-5"><nav class="navbar navbar-expand-sm">
  <ul class="navbar-nav">

    <li class="nav-item dropdown">
      <NavLink class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        All Products
      </NavLink>
      <div class="dropdown-menu">
        <NavLink class="dropdown-item" href="#">Link 1</NavLink>
        <NavLink class="dropdown-item" href="#">Link 2</NavLink>
        <NavLink class="dropdown-item" href="#">Link 3</NavLink>
      </div>
    </li>
    
  </ul>
</nav></div>
    <div class="col-sm-7">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="fa fa-bars"></span>
                    </button>
          <nav class="navbar navbar-expand-sm deal-navbar mainmenu collapse navbar-collapse" id="collapsibleNavbar">
  
  <ul class="navbar-nav">

   
    <li class="nav-item">
      <a class="nav-link" href="#">Deals</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Expert Reviews</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Price Drops</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Trends</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Shopping Guides</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Stores</a>
    </li>
  </ul>
</nav></div>

</div>
 
</div>
</div>



</header>
        </>
    )
}