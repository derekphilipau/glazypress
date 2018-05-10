# Changelog

## Todo List

Re-structuring of materials, material collections. Addition of 
regional and supplier-specific materials.
Allow for both a descriptive name and a code name. Descriptive 
name example: "Butter Satin-gloss with Iron specs". Code is a 
shorthand notation for a glaze such as "WWW 237 M1"
Calculated Expansion. Needs research and consensus.
PDF download of recipe. Currently, the "Recipe Card" function 
only supports download of jpg images.

Drag & drop photo uploader.

## Changelog

This changelog is a log or record of all or all notable changes made to the Glazy website.

The changelog will be gradually completed as time permits. 

  * 2016/10/10
    * Added ability to collect recipes from any search page.
  * 2016/08/28
    * Fixed bug on material page where recipes not containing that material were incorrectly displayed. Also added the recipe amount of the material for each recipe.
  * 2016/08/13
    * Added ID search. Each recipe in Glazy has an ID. For example, the ID for http://glazy.org/recipes/4571 is "4571". Now, you can enter the recipe ID into the keyword search field. However, note that the keyword search field will search for recipes with the ID or with that number in the recipe namd or description. So if a recipe has a description like "this is from a database of 1000 recipes", then that recipe will show up in the search results for "1000".
  * 2016/08/09
    * Added GHS and HMIS hazard warnings for most materials. Hazard information now displayed on Recipe page.
  * 2016/06/01-2016/08/01
    * On hiatus
  * 2016/05/29
    * Fix bug in Recipe images slider when number of images is greater than 10. Add "Total Base" row to recipe materials summary.
  * 2016/05/28
    * Add LOI to Percentage Analysis on Recipe page.
  * 2016/05/28
    * Import of 860 recipes from Louis Katz's Hyperglaze database available on his website: http://falcon.tamucc.edu/~lkatz/allglazes.txt More information about Louis Katz can be found on his website, http://www.louiskatz.net/
  * 2016/05/28
    * Fixed photo upload for large image files. The file size limit is now 6MB. Also fixed photo orientation issue.
  * 2016/05/25
    * Add image thumbnails to recipe carousel.
  * 2016/05/17
    * Updated CSS (Cascading Style Sheets) styling to latest version of Bootstrap Material Design
  * 2016/05/07-2016/05/12
    * New Help format. Separate sections split into multiple pages. Table of contents updated. Added recipe mixing and testing pages. Added Orton cone page.
  * 2016/05/02
    * Use material "short name" rather than "long name" in recipe view. For example, for EPK the short name is "EPK" while the long name is "EPK, EP Kaolin, Edgar Plastic". The long name is used in the recipe add material page for easier lookup.
  * 2016/05/01
    * Ordering of oxides in recipe view. Later this ordering will be unified across Glazy.
  * 2016/05/01
    * Use image carousel for easier viewing of images and better page layout. Later, thumbnails will be added back in.
  * 2016/04/30
    * Add all oxides into UMF view. Formerly, only oxides that fit within the RO/R2O, R2O3, and RO2 groupings were shown. Now, oxides that do not fit within these three groupings are listed in an "Other" category.
  * 2016/04/29
    * Adjusted calculation of percentage analysis in Recipe view. Now, two rows of percentage totals are shown. The first row is unadjusted percentages, adding up each oxide amount actually contributed by each material. The second total row adjusts all these percentages to total 100%.
  * 2016/04/23
    * Keyword search greatly improved. Indexes of keyword search terms now include numbers (helpful for recipes that have numbers as names). Search uses MySQL natural language text search which ranks results by relevance.

...
To be added.

  * 2015/08/08
    * Glazy registration enabled.
  * 2015/07/12
    * Initial commit of Glazy code.