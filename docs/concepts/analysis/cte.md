# Calculated Thermal Expansion

Calculated Thermal Expansion (CTE) is as a handy number that we can use to compare *relative* expansion between two analyses, e.g. when adjusting a glaze to reduce crazing we want the CTE to go down in comparison to the original glaze.

The method for calculating thermal expansion for an analysis is very simple, it is the sum of the products of each oxide amount and the coefficient of linear expansion for that oxide.

Take the famous Leach 4321 recipe:
```
Potash 40
Silica 30
Whiting 20
Kaolin 10
```

Let's further simplify the problem, replacing Potash with Pearl Ash:
```
Silica 44.84
Kaolin 26.76
Whiting 18.97
Pearl Ash 9.44
```

Normalized to 100% (removing LOI), the percent weight analysis for this recipe is:

`SiO2 67.390, Al2O3 12.612, K2O 7.524, CaO 12.474`

The West & Gerrow coefficients used by Digitalfire are:

`SiO2 0.035, Al2O3 0.063, K2O 0.331, CaO 0.148`

The calculation is then:
```
SiO2 67.390 * 0.035 = 2.359
Al2O3 12.612 * 0.063 = 0.795
K2O 7.524 * 0.331 = 2.49
CaO 12.474 * 0.148 = 1.846
```

Adding those results:
**Calculated thermal Expansion: 7.49**

Using the Pearl Ash 4321, let's swap K2O for Na2O:

Leach 4321 Soda Ash:
```
Silica: 45.29
Kaolin: 27.03
Whiting: 19.16
Soda Ash: 8.53
```

These recipes have equivalent UMF formulas, except K2O has been swapped for Na2O:

Pearl Ash 4321: `0.264 K2O, 0.736 CaO, 0.409 Al2O3, 3.71 SiO2`

Soda Ash 4321: `0.264 Na2O, 0.736 CaO, 0.409 Al2O3, 3.71 SiO2`

But of course the weight % analyses differ (normalized to 100% without LOI):

Pearl Ash 4321: `SiO2 67.39, Al2O3 12.612, K2O 7.524, CaO 12.474`

Soda Ash 4321: `SiO2 69.171, Al2O3 12.946, Na2O 5.08, CaO 12.803`

The calculated expansion for Soda Ash 4321:
```
SiO2 69.171 * 0.035 = 2.42
Al2O3 12.946 * 0.063 = 0.816
Na2O 5.08 * 0.387 = 1.966
CaO 12.803 * 0.148 = 1.895
```

Adding those results:
**Calculated thermal Expansion: 7.10**

To summarize, for two UMF-equivalent analyses swapping K2O for Na2O, the K2O version has a higher calculated expansion than the Na2O version, even though the oxide Na2O has a higher coefficient of expansion.  This problem arises from the fact that we are specifying "equivalence" in the UMF system but using weight % analyses to calculate expansion.

[David Hewitt Pottery: Calculating Crazing](https://web.archive.org/web/20050507220438/http://www.dhpot.demon.co.uk/crazing.htm): Table 2 contains Coefficients of Thermal Expansion that the West & Gerrow values from "Ceramic Science for the Potter" used by Digitalfire.  West & Gerrow has coefficients in terms of both "% Wt. Linear" and "Unity Mol. Coeff. Linear"

[John Sankey: Glaze Thermal Expansion](https://johnsankey.ca/glazeexpansion.html) also contains a list ("Comparison of expansion data").  The "by weight" values all have Na2O > K2O, but Sankey's own "molar" values have K2O > Na2O.

[Digitalfire: Calculated Thermal Expansion](https://digitalfire.com/glossary/calculated+thermal+expansion)