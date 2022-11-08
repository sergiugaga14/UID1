import { useEffect, useState } from "react"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { scryRenderedComponentsWithType } from "react-dom/test-utils";


function JokeCard(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose2 = () => {
        setShow(false);
        let map = colors;
        map.set(id, "rgba(255,130,130,0.6)");
        setColors(map);
    }
    const handleShow = (id) => {
        setShow(true);
        setId(id);
    }
    const [id, setId] = useState(0);
    const [jokes, SetJokes] = useState([]);
    const [colors, setColors] = useState(new Map());

    useEffect(() => {
        SetJokes(props.jokes);
        let map = new Map();
        for (let j of props.jokes) {
            map.set(j.id, "rgba(255,255,255,0.9)");
        }
        setColors(map);
    }, [props.jokes]);


    return (
        <div className='d-flex flex-wrap justify-content-center joke'>
            {jokes && jokes.map((item) => (
                <div className='p-2 flex-fill ' key={item.id} id="element" >
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <div id="container" style={{ background: colors.get(item.id) }}>

                        <div className="product-details" >

                            <h1>{item.category}</h1>
                            <br></br>
                            <h1>{item.type}</h1>
                            <br></br>
                            <br></br>
                            {
                                item.type === "single" ?
                                    <p style={{ fontSize: "20px" }}>{item.joke}</p>
                                    : <p >{item.setup}</p>
                            }

                            <div className='d-flex  justify-content-start'>
                                {
                                    Object.entries(item.flags).map((fl) => (<div key={fl[0]}>
                                        {fl[1] && <div className='p-2'> <Badge bg="dark" size="lg">{fl[0]}</Badge></div>}
                                    </div>
                                    ))
                                }
                            </div>
                            <div className="control">

                                <Button variant="dark" size="lg" disabled={colors.get(item.id)==="rgba(255,130,130,0.6)"} onClick={() => handleShow(item.id)}>Report</Button>

                            </div>

                        </div>
                        {   (console.log("Baaaa",colors.get(item.id)==="rgba(255,130,130,0.6)"),
                            item.type !== "single") &&
                            <div className="product-image">
                                <div className="info">
                                    <h2> Continuation</h2>
                                    {item?.delivery}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            ))}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Report joke</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to report the joke?</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger"  onClick={handleClose2}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default JokeCard;