function solve(w, h, W, H){
    let area = (w*h) + (W*H);
    if(w === W){
        if(h >= H){
            area = W*H;            
        }

        if(h > H){
            area = W*h;            
        }
    }

    if(w < W && h < H){
        area -= w*h;
    }

    if(w < W && H < h){
        area -= w*H;
    }

    if(W < w && h < H){
        area -= W*h;
    }

    if(W < w && H < h){
        area -= W*H;
    }

   console.log(area);   
}

solve(13, 2, 5, 8);
//solve(2, 4, 5, 3);
solve(1,1.01,1,1);