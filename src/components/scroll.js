handleScroll = (e) => {
    let element = e.target;
    const bottom = element.scroll.Height - element.scrollTop === element.clientHeight;
    if (bottom){
        console.log('bottom')
    }
}

// di div nya masukin
onScroll={this.handleScroll}