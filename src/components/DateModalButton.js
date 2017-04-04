import * as React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export class DateModalButton extends React.Component {

    PropTypes = {
        dateButtons: React.PropTypes.arrayOf(React.PropTypes.element)
    }

    constructor() {
        super()
        this.state = {
            modal: false
        }
    }

    toggle = () => this.setState({ modal: !this.state.modal })

    getButtons = () => (
        <div>
            { this.props.dateButtons.map(button => button) }
        </div>
    )


    render = () => (
        <div className="date-select-button">
            <Button
                className="date-modal-button"
                color="warning"
                onClick={ this.toggle }
                outline={ true }
            >
                Select Day
            </Button>
            <Modal
                isOpen={ this.state.modal }
                toggle={ this.toggle }
            >
                <ModalHeader className="date-modal-header" toggle={ this.toggle }/>
                <ModalBody className="date-modal-body"> { this.getButtons() } </ModalBody>
                <ModalFooter className="date-modal-footer">
                    <Button className="date-modal-button" color="danger" onClick={ this.toggle }> Close </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}