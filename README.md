<div align='center'>
<img src="res/archsif1.svg" width=300>

# hopper

(pls dont actually read this, i'm just meming while laying out the skeleton for the project, do check out the web demo tho!)

Meet hopper, the anthropomorphic sphere! :)

Give him a try! [hopper](https://hopper-hazel.vercel.app/)<br>[showcase](#-showcase)
</div>

## narrative

hopper lived in a 3D, physics-based world with his friends..
all of whom were snakes. [^1]

bla bla bla, evil man comes and sends him back to the 2D realm. You must discover dimensional keys to unlock
more and more of the 3D realm.

finish narrative section by December 25

## gameplay

hopper is platformer that transitions between 2D and 3D, physics driven, platforming gameplay.
there are also light puzzle elements, and a lot of me... uh.. forcing the player to stare at pretty
shaders and scenes i've coded.

## 🌟 showcase

<details>
<summary>hoppy!</summary>
  <img width="700" alt="nonut" src="https://w0.peakpx.com/wallpaper/73/146/HD-wallpaper-pretty-anime-girl-hand-gesture-posing-anime.jpg">
</details>

<details>
<summary>perspectival shifts</summary>
  <img width="700" alt="sus" src="https://cdn.statusqueen.com/desktopwallpaper/thumbnail/anime-girl-Hd_4k_desktop_wallpaper_photos-505.png">
</details>

<details>
<summary>placeholder</summary>

![kawaii](https://www.icegif.com/wp-content/uploads/icegif-2013.gif)

</details>

<details>
<summary>placeholder</summary>

![kawaii](https://www.icegif.com/wp-content/uploads/icegif-2013.gif)

</details>

<details>
<summary>placeholder</summary>

- placeholdering

![placeholder](https://www.icegif.com/wp-content/uploads/icegif-2013.gif)

- placeholdering

![placeholder](https://www.icegif.com/wp-content/uploads/icegif-2013.gif)

- placeholdering

![placeholder](https://www.icegif.com/wp-content/uploads/icegif-2013.gif)

placeholdering...

</details>

<details>
  <summary>placeholder</summary>

![kawaii](https://www.icegif.com/wp-content/uploads/icegif-2013.gif)

</details>

<details>
  <summary>placeholder</summary>

![kawaii](https://www.icegif.com/wp-content/uploads/icegif-2013.gif)

</details>

## technical stuffs

all jokes aside, i've mostly committed to this project due to my interest in cross-platform compatibility.
everyone complains about how terrible electron apps are, and, i certainly haven't heard of anyone using it for
a fully 3D, realistic game. But, I think if you know what you're doing as far as resource clean up, instancing
your meshes, reusing components, shaders, etc. Things can work out surprisingly well


### stack

1. **React** [^2]
    - I was really resisting using react for the longest time, but drei, and the ability to reuse components
    so easily really one me over.
    - props. props are the greatest fucking thing on earth.
    - react-spring. bb come here. i wuv you.

2. **Electron** [^3]
    - bc i chad
    - bc i make game prettier than you that run better than yous that use worse technology than yous
    - again.. i chad

<details>
<summary>i mean like, cmon, just look at my dev environment...</summary>

![kawaii](https://media.giphy.com/media/CmCTQsTDZw29LVpjzF/giphy.gif)

</details>

3. **WebGL** [^4]
    - webgl is incredibly performant if you know how to use it properly, and compared to Vulkan, or even base OpenGL, very easy to use
    - I'll mainly be using the three-js wrapper for webgl, but also injecting some of my own raw geometries and shaders.

4. **Rapier** [^5]
    - written in Rust (ooooo so kawaiiii)
    - very performant
    - just so sick
    - can also be used in Bevy, my favorite rust crate

5. **Vercel** [^6]
    - i'm lazy


### footnotes

[^1]: by mere chance alone, mind you! having nothing to do with my laziness or inadequate coding ability ;)

[^2]: placeholder link

[^3]: placeholder link

[^4]: placeholder link

[^5]: placeholder link

[^6]: placeholder link
