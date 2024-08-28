import Button from '../design-system/button'
import styles from './draft-warning.module.css'
import {EOTMessage} from "../../lib/upload";
import {Signal} from "@preact/signals";

export default function OutOfSpaceModal({ eotMessage }: {eotMessage: Signal<EOTMessage | null>}) {
	return (
		<div class={styles.overlay}>
			<div class={styles.modal}>
					<div class={styles.stack}>
						{eotMessage.value?.status == "OO_FLASH"
							&& <>
								<h2>Your console is out of game slots!</h2>
								<p>There
								are {eotMessage.value.slots_available} slots available,
								but {eotMessage.value.slots_needed} slots are needed for this game.
								<br/>Please delete {eotMessage.value.slots_needed - eotMessage.value.slots_available} slots worth of games, then retry.
							</p>
							</>
						}
						{eotMessage.value?.status == "OO_METADATA"
							&& <>
							<h2>Your console is out of metadata slots!</h2>
								<p>Please delete any one game, then retry.</p>
						</>}
						<Button onClick={() => {
							eotMessage.value = null
						}}>Close</Button>
							</div>
						</div>
		</div>
	)
}