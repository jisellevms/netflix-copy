import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Dimensions,
    FlatList,
    ScrollView,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


const { width } = Dimensions.get('window');

const first = [
    {
        key: 1,
        name: 'Cinquenta tons de liberdade',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQh_uvGUHjCPe4v3b91sEuRUAXG17MRE96EJO3TjlHyQwkkpu-VA&s'
    },
    {
        key: 2,
        name: 'Para sempre',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW61VOiLTQoWXKMIcDnP1zusu0eluKI8uJlVvjfAy5JgwcEmvihg&s'
    },
    {
        key: 3,
        name: 'Um amor para recordar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDiZ_oSlF20_xGOxxsPWEMOEY8EZQULjdWYDe-2u-bIyXa3P3&s'
    },
    {
        key: 4,
        name: 'P.S. Eu te amo',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQTKNnmUOmA1484J6as76c9gjUZvo9MHUncAwKoLSrUaGum_U&s'
    },
    {
        key: 5,
        name: 'A última música',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFRUXFRcYGBgYGBgaFxgVFxUYGBcXFxgYHSggGBolHRUYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lIB4tLi0tKy0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLf/AABEIARAAuQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEUQAAEDAgMEBggDBgQFBQAAAAECAxEAIQQSMQVBUWETInGBkaEGFDJSscHR8EJikgcVI3KC4TND0vEkU6KywhYlRGNz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAKxEAAgICAgEDBAEEAwAAAAAAAAECEQMSITETQVGhBGHh8CIUMoHBYnKR/9oADAMBAAIRAxEAPwBp6qa8+50SCSb7hvmnfq4isl6SYgBcGYTaN164JZm0ehDCrEeKcJJVeR3317Tr8eFUtAwFSZURM8AZgDuuaHXiLlR1UrTgNwqt165SD1jYnckHdUKbOxcBy8Qd5MWTE6QRIJ3zF6uXi1KASFDrKA36A3NtQB8t9KFLClRuzKnnF58zU2V3JAvG/ckCPvtrOJrHOAxQKD7wzQVai5SnTf8ASr2iUlRbUFAHKSNxUo2Sd5GbugVnVNqGVIUZgn4386Z4bEKQgBAmEgxwM37T7PhSuNDLka7NaIBIMKgKjUBKlezy+kVotmPEGNI1HCeFZDZzjnttgkxlUgwbpsNb3gC3Cn2zsVnII3i43pUBBkd0cxFSm2uR1GzUm5mpLTahNmux1VTw0Nu/60e6sJiZvG61yAL6bxRi9kI46gpTQ+IaNXrxSDfML6eX1Fe9YSbSNB4GIPmKdJiugBYPZQykmmTziYkGdNLm5gWoN9wQYUJtVYkZKgZTRNVFJokKMWI37jfmOVxVTiid6dLWvpJqsfYjKuykiq1oFd6URqNAasTl0JH+3+xp3GuRE7Alt1QpqmwCTN9J8ta90KOI1pPLRTw2JFtVDJTtTCSPnx7Kr9XHAVvMDwmqccCUlR3CvmfpDjStZA3mde3wrW+l+0i22EpN1ePL75VgXDCpInj4VJqmXxdAa0HXwHCbeNTZndv+/lU3DmuTc/D7+FeYaUVyBaLUb4KUUuYgKm0an77orwfIzTpbv/tXVMkSIM3AgakmPpRLuDWILrTjaTAClJUkaRFxyrWgUypDkmd3x+71oNlKhQSQIJNtQEiBMcBBpS2QBIE6AAbuZo3C4n2wlJvYqO4cO6alk5RWIyw4KbpzAlQXI0lZ6w7DYz+XnTTDspUtS4yLsTwWJ9oETcfSaCL8BQRdWYEdidB8fGrdl4rrlKpnNKZ3pkxE2kacxMbhXO7Y9jpx1PtmSU2JSesOMgWIppgXcyIJmN/wpBnQFKSoFIVe4toLAjd8Iq3ZWMElPcI+lNhX8ieWf8R4u24VUXRwFcJKqpcYOtdsYL1OJ5H2iTuIHAUMXxvSIqSGTVnq4OtWUYR7Iuc5A6ljdUY5UScIBViGqzlFdASm+wcMCNK4WRyopSarLJNRci6QMpQG4VU4rspknZ8iTUhggNalLJFF4Qm+xMonhXIPCnfqiRuvUejFc0s1Po6I4vuYnbeKLqioyPdtoNwpI41FgBxJ31vDs/NqBVTno0k+z1eyneZWZQSRgk4bMY8Bw51otm4FSbZbG0x50+wno8ls5iZNHPpSlNLPLfCHhFWBbM2a0yC8sSb5eQ5czSjb7ri2HiVfw1IICSmDO5Qm4Ap5txhZZlswoQEncCSEyeMVTtlsBmCAqwBOkmLnxpFJ2mPxz9z5fhsSpOszuPdw76KwmK6uWTqTE8efzq9WzOvYd3D60WNiqTqkwdbd9dkpxOZQkMNlOaJBtI7P70+ewjYCVZwYUCTxN/IZjS/ZmzUqi0U6GzkjdXFOSssoNkcXiG1JCCqDEBQuk8lT276CQogJjWfavbtjWwrz2BVmOVJUkgSIkb479ao9WWXUpgpbzDMSLZd++9ptRj9gOKXDNzh8PKQdZAv3VYrD0bgMaysQ2tJjcNR2g3FQxikpvrXY2cUXzVABw1ULZNNBixF0UMleZXskdoIoqRmr4o5hsFmpgNjgxeKmEQKodcI0JHZQteoKb4iEfuxCdSI5wKHWhlNpnsoJ1Rqo5qRv2KRxy9WEu4xIslPjQS3irfFdLZqot8KlLkvBUUrb/NVWT83nUsQqhY51BwssnQyDUVMKir3Bv7vpQbprPgknsedXQGKSV2ohZojDtjWh2UT1RSpBsO2gdqYAuoiYIMi9u+m0Sa8oU3RtjKpwJLgARvEyLa6k+NaUYdMAEaV6IvSn0ix5bbzJMGdONZttjDdrDJGgipHCqWoJTqfuTWSwW031gFgqJJ9mJE74nStzsdLiG878JXHWCTIAHxJorHb5EnPRcd+gwZwyWUZQeaid5r5p+0rb2VYS2oCAII0Ct9u8Vp8fjVOk36u4VgPS/YxKS4NRf6/M1XHli5qPoSWCSTk3yA7GLt3cxlKRmMnUmfgAe8Udh9tulJKVrlIJT1jcETv37vGqdjsgYdQ3hKt9py384T3VZsbCjLlJAKbaj2NZPZf7mqtrkCTVBbfpu9h2UICs2ZsEKVfLJ46+NMPRr0ucX7bigZm/WRYbyTKeOlZLHtodVYdXLlTI3J+RmRQexJZd6MzvKb6pH4fCapqnH7km2pU+mff9mbYDoyqgK3EHqq7Dx5GrMSa+J4XGONOOBLhA1jdyt21v/RjbXStpU6TBtmP4Ve6o/A76m7XZo465RojFcNEpw3A14sUrY+6A1CqVoo1bdUlFTkyiYC41vqnoR7tMSKhaotlEyw3BHKR8qWOOUbgHgUIUmwNryLpOUg7pkHWgdoIyqI7x2G9aQuHtooW7V7L1qUPv3o7CqkUCskGhypqXIoQg1POEiTRFotil21GQshOoFzUl4srsgReL2JOlgaqDLzMhxMpVJzAyAeB4UdX2OnQ19HMGEkkJEC3ef7fGgvTVx1RQw0vJMFUa6mBR2G2hlalAuZM7hw7TArKbRfxCngppOc6nNOukgjS1qomklFE1Bubk/Qb7FS6B0b0E/hWBAPFJG4/GhPSxMMKVpee4fKnmzekKQXEZTvEgjypJ6aJjDuc0n6VNL+SY8pdnzrF7RKUZQfaN+xMHzVHgapZxJDK7nMsx/SLq+lLcUucp/J5gknzmmODZ6i1HQCO9Skk/EeNepqkjg2bZdsXaQzBpRtIj/flp3+DPajKcwVooGArhbMD5Ed9ZFYuSNx+dMUY4uZZmZT/3A/2oShzaBHJxTNQGApcjUojvCp/8TQvoxtdbHUXJbV1SDvFrg8RMjuqnZmLPSGdwPxP+qukBeGKhYpM6bx1VA93wqNVwy13yj7V6P4gutIMz1fMRMjdqk95G6mK0Gsl+zTHZ2GwfxT5ZwZ8BWudeI4G/CpuKOW25UgXoFHjXfU1cKtOMI3V7948am4oe8noihWEPCo+pnhRRxo3Ed9c9a/lpXFBUsnsZr0UxWZtSLnKbE+0UnjGhEQR9aJ2vhyqCOEfMeU+FLsE2pnECLJXI5X0UBeLgSKfPt5k6zv8Avunzpasu3rO0K1+jMpJUrrRaNAefGl7WHU2SlQgj7tWrwgUUCSZAg+FdxOASsX13HeK6ZYU4JxFjnak1Iz6b15ODUqYST8KZo2QoHURx/tTJLIAgaCpY8Df93BSedL+0Aw2HIQkKAkCrHWcySk6EEeIiistey12Uqo59ndmPdBQehWDIMApPVjWeVt1NMKm0UFtHCqSekJCklUgpvF9/K8UYyLV5z4kd7dx7DCbVjP2j4nLhlJGqrd1apSzWS9NcEp5HV1G7iL+dPCS3Vk1Hs+UoczAg6gyOY1I7ZvTrCtkNrGgMW/lhKvLKqh3dmFpQKhroee+eFgavTiZSpYtZcdhTlE+Ar0ZSvo40qfIqxKIBG+Y8fue+rMayUZCn/ltrB/pn4jyqONClEK0kT37+ymG0FJW2jLcpbQg84n6jxprqib5svwjgMqG9M9+8ffCrdkLltwcSR4gX+NKdnLOYt/zR3j+3nTLY67G+qgD+ggfAVOcaspjntR9N/ZchPRNkn2XnU/rbCgO6FVvFsp1zDsmvlv7P9ohIcaA0WlXmUnyV5VrcRib2JqWjk+iUkk7sc4l0JGp8jSt3Hj3aXLcJqtSqZfT+5lnS6CXNoxonzqn96H3fP+1CrVVU0f6ePsH+ol7mmfwufKoDRWa3LW8UwQzaxvpe+/xoPAKMGTrMdk28iKJbSowQTfd3X+dcupSUvQKw6Ld9EBqrsOxvooM16GPE9Tknl5AMlcUijVtUOpFaUWjRnYIpug9pexAJBtprTVSaSbYJSc0W41z5m4wOnC7khQ/hwL3+zPxq5CxVD2MBFAu44DfXnHopNjF1ylmJQpU5ElUeHibUZgcKpwZlGEbuJ+g50TtN9thok2ToAN54DiadIVyUXSPlfpYSXejMgpT15mJgGAB3CaQLXDccSB3XJ+ArZ7P2G5jnlPOShqbneqPwpnXmdKW+leyG2VQ2oxnUnIbkJAQQZOplR8BXfCSVROPJFu2jJ5OqO1XmBRezj/Cg7zPcPrI8K4+zASJ4nxIA/wC3zrqLIHIkHskkeYI8K6O0QiqdsZbGYGd10iyUKI7YJHwqnYKgFQfxFEdw+/GmmAj1RwjVSVDyg+SfOluFaCVIPj3affKpXdl9dda/bNL6MynEOpH5h2QLeafOt1FY70fSPWFqI9pao7CK2aBYdgqmN8HNnXJUpNVLTRKhVSxT2QA1pqrLRS01XlobDxQ52aChzIZy7rfyj5Vp8Kxu7x3zNKl4MTMX18D/AHp5gRYVy4FcqZXNLiwxpMVZXAK7Xqo4DhFDuoomh31VPJVDQ7BSiqVt1aVVU7iQndXG5Jcs6op+gk2psRChKeofI0uwXo+lJzOdY8Pwjt407xWLzXiuIGauGbi3/FHdGU1Hli7aONQhMnuG8ndApe1swvZVYgWF0t/6vpTp7BISrORJGhO7s50It0qMJ3ancO+p9FI8rg7i1ZU5UJvEJAsB9AK+U+krJL7mYypJg7rQIr6tjX0tNqcVeBJ4nsr5TjHStxbhF1Ekjlw+FXxXdiSS1oQOJM1NxrqJVzUD3Qr/AMjVz7VXYZqUqTyzj+mx8iT3V2XxZBR5ouwrkMhu/WI8CofIedHP7PyqRGhTHeRI8aEaZs2r7t9+VaUjNHLT9I+YrnnJp8HVCKa5LNitZhmAulQnsmPnWxLRpDsNSUkm8KFxzOo7iJ7q2CMQ3AOU6UI5JLojljFvkV9Aa4rCmmhfb901A4pHu1nlmIoQ9hWcHUPUxxpocakaIFR/eA9weFI8sx0oew0Kbz97vpR+FVApAl0pIn2TyiD9KPafi4poZVGVksmJ0P0KqU0tZxNqt9Yr0I/URaOF4mgta6DecqC36HUqajlz3wikMdHVL30ufck1fil7vGg1V5+WbfB24oVyQVXU4iKiqh3DUOUdCSZc66Vam1L38ZbKhPh86sexgG6eVLMRjlaIASKdWPFJHdt4nIxBOZS7Dlx8qxD7Oh5Vol4VTh0UTzsI7TpUHtirsIF98gjjFqvBxiLJNmTeZtVmHQU5VcD9imGNwhSSCINSaYlI7f710bcEqpncE0khTR39ZB56j77eVEYNZBAPEfA/WahgWuunlV2HT15Ok1Njoc7Ga9rsJ/6I+YrSI0HYKUbFZjMCd4J7JJHdTZUUmwkoWzyjVSlV1RqpaqVzQuhFSqrzVxaqrz0uw2g4cIiSdb6cd1eYxEWP2ONBqd6k6D+9t1VLfyxpbUjQdvKpOXJdQ4oetubwfPdRAXSNl7Tn49lEsYkGUzetvRGWIZKc51Bb1DFdVqcvW3YqxlhXNQUqo564VUtlEiDi6FddopQoR0XobFErBejKjyotptKRAHfvrqK8o1trHSo6pdQKhwFQUarUqimMog+1cCl1JgQoaHjyNZzDJ1SbEVpyqk+1cNCs436/WrQm+hJQ5sAQn2uz5ia4g/Cp5d9RLdPuT1Y3wGKKYM6WPZ9xTY4jnSZCfaHMeISKmysxB3VFyK6jJT9UrfoRS6pW5S7GUAtb9Q6el7jtVdLWG0Q9wuKKbG+h7RofvlRailQgRcGL+XnSRjEAwofY+1VcrFEEEXSZMd2lFgSDm34VlMCRIMnXhRTqoIIE7uyRY/Kk3rAOU5oEkA+MR41NOLOWDqND2G3gRSUHWx6ziSRBEH4jiKlnpIh9NljWJ4yDxq8Y0HQ0LMsQ0LlcDlLDi6964ONG0N4mM1u0MtwUA5jhxoc44caV2wrHQ1Lg95I7VJHxNTWUBAPSArP4REJTxWsmEn8utxzIu2FjJw2LVaW2ipJIBynKsyJ7KzZ2jfW+syZ8a6PFGMYyau/g5tpSnKN1r8jVTv5k/rT9aqUv8yf1p+tFgB9ThUtSeiwzbsJSII6BtaoEjrFRN6TM4lvIpa1KEKSEpSASZCiSZIgDKO9Qp3gp8L5QI5rXL+H6hgdANyCBuBBJ5CD57q9tVQWhs50lXRweskEFK1ajN1RlKYHACrMXg2W3GULdcHStoWFZEwkLJACuvyuaExDKBhG8RnVLiyjLAgEAkmZuOrw31RY5RTjXyL5ISalfw/uAdAeKf1o+teDJj8O78aPrRW2tmhphl9CypDgAMiChRQFpSYJuUk+FQ2Ts8OsPPqWUhpBUABJUE+1qRAuBPbwoeF3VfP4N5Y67X8fkkhJA1T+tH1ripG9P6k/Wl+BcLq0NpN1qA5CdSeQF+6vbVBYdcZX7SFEdo1B7CCD31PxcXX7/AOFN+atfv+QpT1ULepavHDjVC8eONKsTKeRDJb1V9NSpePFVev06wsHlQ3wrmW06aeBA8wKLcfvrvBHz+NImcTxv8arxmMsmCQd/lT+O2JvQ2cxEZr6KB7iZ+Zq1OJubixnWs568CL5pyEd827q8doIm+by08OVVX09knnSNFg8QYIKh1VEX4ap8iKvw74j20iCRv0ms03i2zPWWPDWOVLtqvlcIbzqkkkASbARYd57qD+mv1Gh9Ul6Gnw2PXnWXHUJbkhHA3MQRrYedGNY5CwcjiVRrBNfN2pWpLYMkqCQJ3qMaVsl4b1clToUlTmXK2jglIEzx+vGhPAkUjn46GTj3OodL+YUncxY3Jf8AL5VQrEHXLiD/AEiqL6dnPL6lex9F9C3gtvGYYKHSPMENidVBKxHb1h4GsrCivo4PSTlyQc2b3cus8qM9A/R9vGlxLrmLZcRl6NedKQpSgsgBOUkEBsnW/Ks/tHGbR67Lj2KOUlCgXT+EwQVAypNt5ro8CcUm+jl89TbS7PoGwnAXMckKCsmALci4Km2UNqjiMyDHGsggKUhax7KACo7hmUEgTxk6cjwpliPRleF2a281iMYnEOLDam28V0LSHYVmzRGbJkymVCSDcClCMJjWVkbQXjVjKFIY9c9pc9Ra1B49GkETIBJOmhppYE1y+icMzT4XdfBpPTtcKwnPBM/FVR2i5/7RhjP/AMpy/wDS59Kyr+ytpOhBW5iFhZUUBWLzgZRKoCnSUhI1J031anZe0ujB9ZcU1KUR66FNpVqkR0mVPs2kRa1F4k23fZlkaSVdM2WyVdMX9nKMF3D4dbU6B9GEZI8QBPJJoXYLwU1tJCDKG8EUJI0IRnlf9Sitf9XKszjtl7TS8hpxx1T/AOFJfLjoEHQglSRBNuFRweyNoJUWmcSUqJgtt40JUVDXqIcGZW6ImiociuXARs3Klhx5wrAWegQUgE5lDM4RJGiBlP8A+tOvTMjE4bD7Qbkn/AekX6RHsKUBYTf9SaxzmGxCowy8QtQzhAZU84pIWFQEhs2Bzctait15sKYONdSlMoLQfdCBEhSS3OXkRFLpGqsbaTd/7KnHudUKe51QMC17yT2SamphsD55HD8FUPHH3H3kQViOdV9NzqtbaBvP6FfWq+jTz/SfrTrHERzkOWsRBqnFvTfTWhA8ZqLqxx41zqJ1ylwEB/Qdtu6gnDeK7n+BqDv1+tVRFsa4Z5QSIjQVDEPuBaXUqhcFNo041PDuezOlvNNefVPiaX1GG2yPSHGuOIbLiesYKsqcxHaBWp29sw+rlYV10EKClH8JMGT2KOnDnWB2esoWFAiU3FgbxpBsa0f/AKiWtLjKkpiwzTHVIn2YieyBypMkGmnEMJ+khOQ4f85A7z/pqBSs64lvxJ+VFKaSeFc6BP3NBZWF40MdgLcZZdeTiUlSMThFAwYGUYgqSeShY8prVel2yEqxLe1EO/8ADLbS8Ux1VOphKEkzYKUpqRwSusxh8U2nDrY6JJzqSorzrCsyMwQRBgABZtF5vU39olWFbwij/CQ4pYvJlWgM7gVKP9XKn86S/HqS8DbtfqHe0cLn2E0lWIJJxS1F2wJUpTxO+NVVR+0rApXiwovlH/DtCApIkdbrX+7UK/thCsGMF0LYaCioXXnCySc05r3JtEUPisah5ttD7YdU0gIQ5mKXOjHsoUbhYG4xN9bmtLMmqv29DRwtO2vf1/If6POs4ZLJcUXm1IxTawVpu28WwvSJIyxqPaI31za3ojhksLewuJU5h1KQHUqc6yCDKAo2sCe2++aXYXFhClSy2tsslnojmCUtlYcsZzZ84zZiSZPYB1LyA0WW2glpa0rcBWSXCiciVKiyQSTAAM76Hm4rYPi5tRPoO1cIj1jaryI9YGGbSCFQpLamyVEQZTMaiPZF7V8qZ2a0ggp6MEEEHpNCLgiV6itFiPSZ71s4xKUNuqSELAlSHEiAEqSbxYaHdSlxWHC+kTgmkqmQkrWpoKmbNki35SSnlFqM8il1KjY8bh3GwvZ7aUuOYwqwwcQrMla1NJBxDiiQSVqAzQHFx+SmHp1gW+lRjG1NBrEp6QK/hFPSCzgC9FXvMm5NItoYhLjXRrbSCXVPrXmhTjqxClERl7AAAJMamrXdqoOCTgS0hSEqK0KK+ulxUypOgjrKtEXNLtHWrY2sttkv8AKlyP8AHbj+Zn61Qtkq/wA5P6m/lQatljgrxQfkKoVs1BtCx3JPzpUo+5Vyl7BL2zv/ALAexaD8DVP7v/P/ANY+tDPbOR7rn6EfWhv3en3V/oR9aov+3wTk/wDj8lRd511a6oTXVd1PQjZYFVM3Fvs0NNWoXajQA9Dvy8qsJtuoILvUw5NINYa2u81LBuzPd8IoIOVbgzrPKs+mZdoYlXOuTVFq9FS1LbFxJO81Ez7x8arivRzo0Cycn3jRJeT7p1n2ra6RHC1ByaNbxLqzYJUSdco1gnXjY1qFbOl1F+ob/mMd1q8HU5bJM8c2+OziJqSXHr/w9T/y7fCONSS86J6gvEyiBaQCdw3+FA1nOnTJOQ3n8Wknda0UItKidbbpo1b7qRKm0RpdA114fcGhlOkkmBfhagFFKkr41EoXxq4L5V7pPy0bYeAchY31WrPzowrHD78aiVJ4fGjsChepCqjlVwFHkjgfOo24HzptgameI4VIiolNeUqrEjzir2rrY46VWo10AkUaFCFOTea6VWqlsVZNuyhQQhCvvy+VXB2gkKqZVQoykGB2u9JQeepZ6Go2wWHOddDnOg89e6StqbYZ4ZJVPXAjiYG+/Zp4jtE0yP8ANR3K3hQF9I1J7KVZ66F1tQWOkFVpeRefxncDE8JjzqSFEj/FToNTHaOy5pIFmphdBwDY7UFRBcRGsZpg9h33qp3qgHMgzwIJHaN1LAupBdLoMmGh2rA4KADlSDlK4jJh4cHKuF0cqDC6l0gpdRti5Tg5eNczDlVBWKjmFHU1iTNvqCQVGBqfvfRDrQNqqQ2oEEG+6ulEGy0YJcez5j61w4Rfu6X1E+E9lGthQEqKzeDEFOaCRcG9qLDJCc/RuZYmTuAvOvCPCtYBOMMvTKRrrYW11qSsMvSIve4+tHOBUgpSTrMrEbuCjz8a6UTIyKPKfxW/NxrAAxhV6Zb931qJYWPwq7hPw30wzaQFDrcR3/ivItNFYbCLdKg2hailIUoZkiyjAN13mItWAJUMLJgJPw+PbVnqzmmXzH1p4rZbo9ppQ6mYdduMpU2JnPGrrdteum1U/u53MSUqASAVArbgJUG8pBz3SenZuCfbFbk1oV+que75j615OGWdEny+99N2MI44lCkNuKS5IQQR1iFhBSBm9rMtIjW86XqtzCuBouZVBASCF50FEKK0pyqCyFGWliBJ6hocm4Fpwyx+HzH1rxwzgtlv2imwwizPUVKUBwgrQFJQUhQWUlzMkFJBuN4qxzZzqS5mbUktnr5loGWMgv195cbgjUKBEg1uTWhMGl+6fvnUiysXy7p1GnjTBWBxCSU9EtXXabuof4jyc7aUwYVmTBm8ACSK44yUhJUlaQokIkgE5FFK7FUwFIWJ0kVuQ2AdE57vPUaV1LTnu+Y+vOjVf1acR461ICJhKgf5uEfmoWEB6Nfu+YrvRr93zFEKeAUQQvdAFz5HnVbj6AqSlYPOZi/Pn8axrIhtfu/CoLURYiKOZClEISlwrNk9vjb+9L8a2tCyhz2hE+Ej41qDZzpK9nqqa9NajWUBZrgdIuJkeVSzcRXgORog5ILeUTJJPbJrqn1RGYxpEmPCrB96VxSZ/wBq1mplAdWNCQOAmupxqp9pQ7zVoTzruWjZqOHEqMdY+Jmidn7aew5UWlQpQSCSAqyVZhE8+II3aUMUA17KK1mcRifSnEm5KT/DDQ6mjQLasgIM5czSDBPve8Z5htuP6AhUMpZgj/KSsOJTaN6U9oSE6WpaU11tRToYmtYuqHGz9pvNIAbcU2Rk0SkiUOl1CusYzBRN40JToaknabnRqaCylCmy3lS2kANqWpakAZtCpRN5ubRAhP05415WIXqDWtmpDf8AeTozGQpamg0pSmhmU2EBISVZvdSkTqYBMmDUHfSLFBJSogpIKYI/CpwOlAIM5cyRYzYZdLUpOKXvMca8p0qFya1sFDRfpRiFJylQjdAgpMOiUkGQQH3I4SPdTFe0duOvgpWUwXVOkJSAC6qcy43E5jpE2mYELMo41G3GiCgkYtWmY6RqdOHZUhile8fE0IAK8TQoNsK6YzMmeM3rinCdST2kmhs9dzmjQLYWnEKEQtQiIubEaRwrjjpUSpRKidSTJPaTQwXUgaFB2Lga9IqsGuzWDZ//2Q=='
    },
    {
        key: 6,
        name: 'Romance',
        image: 'data:image/jpeg;base64,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'
    },
]

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            data: ''
        }
    }
    filter(text) {
        const newData = first.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        this.setState({
            data: newData,
            text: text,
        })
    }

    deleteData() {
        this.setState({
            text: '',
            data: '',
        })
    }

    _renderItem(item) {
        return (
            <Image
                key={item.key}
                style={style.image}
                source={{ uri: item.image }}
            />
        )
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.header} navigation={this.props.navigation}>
                    <Icon
                        name="search"
                        color="grey"
                        size={20}
                        style={style.searchIcon}
                    />
                    <TextInput
                        value={this.state.text}
                        onChangeText={(text) => this.filter(text)}
                        style={style.input}
                        placeholder="Search"
                        placeholderTextColor="grey"
                        keyboardAppearance="dark"
                        autoFocus={true}
                    />
                    {this.state.text ?
                        <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                            <Icon
                                name='close'
                                color='grey'
                                size={20}
                                style={style.iconInputClose}

                            />
                        </TouchableWithoutFeedback>
                        : null}
                    <TouchableWithoutFeedback style={style.cancelButton} onPress={() => this.props.navigation.navigate('App')}>
                        <View style={style.containerButton}>
                            <Text style={style.cancelButtonText}>
                                Cancelar
                        </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList
                        style={{ marginHorizontal: 5 }}
                        data={this.state.data}
                        numColumns={3}
                        columnWrapperStyle={{ marginTop: 5, marginLeft: 5 }}
                        renderItem={({ item }) => this._renderItem(item)}
                    />
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',
    },
    header: {
        height: 45,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        marginTop: 10,
        flexDirection: 'row',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    input: {
        width: width - (width / 4),
        height: 30,
        fontSize: 15,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 30,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 3
    },
    cancelButtonText: {
        color: 'white',
    },
    searchIcon: {
        position: 'absolute',
        top: 12,
        left: 15,
        zIndex: 1,
        backgroundColor: 'transparent',
    },
    iconInputClose: {
        position: 'absolute',
        top: 12,
        right: 85,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    image: {
        marginRight: 5,
        width: 115,
        height: 170
    }
})

