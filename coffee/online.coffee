log = console.log

svg = document.getElementById('main').children[0]

elem = (typ,opt) ->
    e = document.createElementNS "http://www.w3.org/2000/svg", typ
    return e if not opt
    for k in Object.keys opt
        e.setAttribute k, opt[k]
    e

w=window
rx=ry=0
cx=cy=0
sw=sh=0
mx=my=0
rd=0
lst=0
drg= null
iq = new Quat
rq = new Quat
dt = []
dl = []
    
add = (t,o) -> 
    e = elem t,o
    svg.appendChild e
    e
    
ctr = (s) ->
    s.setAttribute 'cx', cx+s.v.x*rd
    s.setAttribute 'cy', cy+s.v.y*rd

size = -> 
    br = svg.getBoundingClientRect()
    sw = br.width
    sh = br.height
    cx = sw/2
    cy = sh/2
    rd = 0.4 * Math.min sw, sh
    rx = rd
    ry = rd
size()

move = (event) ->
    if drg == 'rot' 
        qx = Quat.axis 0, 1, 0, event.movementX / rd
        qy = Quat.axis 1, 0, 0, event.movementY / -rd
        rq = qx.mul qy
        for d in dt
            d.rot rq
    else if drg
        drg.v.x = (event.clientX/sw-0.5)/(rd/sw)
        drg.v.y = (event.clientY/sh-0.5)/(rd/sh)
        drg.v.norm()
        drg.upd()
        
    mx = event.clientX
    my = event.clientY
    
down = (event) -> 
    iq = new Quat
    
    if dot = event.target.dot
        drg = dot
    else
        drg = 'rot'

up = (event) -> 
    iq  = rq
    drg = null
    
w.addEventListener 'resize',    size
w.addEventListener 'mousemove', move
w.addEventListener 'mousedown', down
w.addEventListener 'mouseup',   up
    
v = null
    
cr = add 'circle', cx:cx, cy:cy, r:rd, stroke:"#333", 'stroke-width': 1
cr.v = vec()
ms = add 'circle', stroke:'none', fill:'red', style:"pointer-events:none"

# 000      000  000   000  00000000  
# 000      000  0000  000  000       
# 000      000  000 0 000  0000000   
# 000      000  000  0000  000       
# 0000000  000  000   000  00000000  

class Line
    
    constructor: (@s,@e) ->
        @l = add 'line', class:'line', x1:cx+@s.v.x*rx, y1:cy+@s.v.y*rx, x2:cx+@e.v.x*rx, y2:cy+@e.v.y*ry, stroke:"#111", style:"stroke-width:2"
        @c = add 'path', class:'path', stroke:"#222", style:"stroke-width:2;pointer-events:none"
       
    upd: ->
        x1 = cx+@s.v.x*rx
        y1 = cy+@s.v.y*rx
        x2 = cx+@e.v.x*rx
        y2 = cy+@e.v.y*ry
        
        m = @s.v.cpy().add(@e.v).mul(0.5).norm()
        
        xm = cx+m.x*rx
        ym = cy+m.y*ry
                
        @l.setAttribute 'x1', x1
        @l.setAttribute 'y1', y1
        @l.setAttribute 'x2', x2
        @l.setAttribute 'y2', y2
        
        @c.setAttribute 'd', "M#{x1} #{y1} Q#{xm} #{ym} #{x2} #{y2}"

# 0000000     0000000   000000000  
# 000   000  000   000     000     
# 000   000  000   000     000     
# 000   000  000   000     000     
# 0000000     0000000      000     

class Dot
    
    constructor: ->
        @l = []
        @i = dt.length
        @v = vec randr(-1,1), randr(-1,1), randr(-1,1)
        @v.norm()
        @c = add 'circle', class:'dot', id:@i, cx:cx+@v.x*rx, cy:cy+@v.y*rx, r:(@v.z+1.1)*rd/50, stroke:'none', fill:"#555", style:"stroke-width:2"
        @c.dot= @
        dt.push @
        
    line: (d) -> @l.push new Line @, d
        
    rot: (q) ->
        @v = q.rotate @v
        @upd()
        
    upd: ->
        
        @c.setAttribute 'cx', cx+@v.x*rd
        @c.setAttribute 'cy', cy+@v.y*rd
        
        l = (@v.z + 1.3)/1.5
        @c.setAttribute 'fill', "rgb(#{l*255},#{l*255},#{l*255})"
        @c.setAttribute 'r', l*rd/40
        
        for l in @l
            l.upd()
    
for i in [0...parseInt randr(50,150)]

    d = new Dot
    
    if dt.length > 1
        d.line dt[dt.length-2]
   
#  0000000   000   000  000  00     00  
# 000   000  0000  000  000  000   000  
# 000000000  000 0 000  000  000000000  
# 000   000  000  0000  000  000 0 000  
# 000   000  000   000  000  000   000  

anim = (now) ->

    ctr cr
    cr.setAttribute 'r', rd
    iq.slerp new Quat(), 0.05
    ms.setAttribute 'cx', mx
    ms.setAttribute 'cy', my
    ms.setAttribute 'r',  rd/50
    
    dt.sort (a,b) -> a.v.z - b.v.z
    
    for d in dt
        d.rot iq
        d.c.parentNode.appendChild d.c
        
    ms.parentNode.appendChild ms
        
    w.requestAnimationFrame anim
    lst=now
        
w.requestAnimationFrame anim
    